# Database

## Conventions

- `snake_case` for tables and columns.
- Plural table names: `profiles`, not `profile`.
- `uuid` primary keys with `default gen_random_uuid()` unless the row mirrors `auth.users`.
- `timestamptz` for all timestamps, never `timestamp`.
- Every table has `created_at` and `updated_at`.
- Index every foreign key.
- Table names and columns are lowercase.

## Core schema

The starter ships with one table.

### `public.profiles`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | `uuid` | Primary key, references `auth.users(id)` on delete cascade |
| `username` | `text` | Unique, optional |
| `display_name` | `text` | Optional |
| `avatar_url` | `text` | Optional |
| `created_at` | `timestamptz` | Defaults to `now()` |
| `updated_at` | `timestamptz` | Updated by trigger |

The full SQL is in `supabase/migrations/0001_init.sql`.

## Migrations

1. Create a new file: `supabase/migrations/0002_short_description.sql`.
2. Write the table, indexes, RLS, and policies in the same file.
3. Apply it with the Supabase CLI or the dashboard SQL editor.
4. Regenerate types.
5. Commit the migration.

Rules:

- Migrations are append-only. Never edit a migration that has been applied.
- Never change the schema by clicking around the dashboard without writing the migration.
- One migration = one logical change.

## RLS rules not to break

- RLS is enabled on every table in `public`.
- Every table has explicit policies for each operation it allows.
- Ownership checks use `auth.uid()`.
- No `using (true)` on writes. Public reads are fine only for genuinely public data.
- Test each policy with two accounts before calling the feature done.
- If a query fails, fix the policy or the query. Never disable RLS.

## Policy templates

Read public data:

```sql
create policy "Public can read posts"
  on public.posts for select
  using (true);
```

Read own private data:

```sql
create policy "Users can read their own rows"
  on public.notes for select
  using (auth.uid() = user_id);
```

Insert own data:

```sql
create policy "Users can insert their own rows"
  on public.notes for insert
  with check (auth.uid() = user_id);
```

Update own data:

```sql
create policy "Users can update their own rows"
  on public.notes for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
```

Delete own data:

```sql
create policy "Users can delete their own rows"
  on public.notes for delete
  using (auth.uid() = user_id);
```

## Type generation

After the schema changes, regenerate types:

```powershell
npx supabase gen types typescript --project-id <your-project-id> --schema public | Out-File -Encoding utf8 src/lib/supabase/database.types.ts
```

Then pass `Database` to the clients when the file exists. Until then, the clients stay untyped.

## Seed data

- Keep seed SQL in `supabase/seed.sql` or a file under `supabase/seeds/`.
- Seed data must be safe to re-run.
- Demo accounts are created through the app, not by inserting into `auth.users`.

## Never do this

- Modify `auth.users`.
- Expose the service-role key to the browser.
- Disable RLS.
- Run schema changes from application code.
- Delete or rewrite an applied migration.

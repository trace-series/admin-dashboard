// ── 認証用プロジェクト（Trace IVEのSupabaseを共通ログインとして使う） ──
const AUTH_URL = 'https://aniuehncwpmwxdjrpqje.supabase.co';
const AUTH_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuaXVlaG5jd3Btd3hkanJwcWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5NTM5NzgsImV4cCI6MjA5NTUyOTk3OH0.OdsG7yEOVYe1o76oGLIZLTL7vOT52CD8kjRWa6kD9rw';

// ── 集約対象のアプリ一覧（今後 trace-◯◯ を追加していく） ──
// supabase_url / supabase_anon_key が空のものはまだ接続情報未設定
const APPS = [
  { id: 'trace-ive', name: 'Trace IVE', supabase_url: AUTH_URL, supabase_anon_key: AUTH_ANON_KEY },
   { id: 'trace-illit', name: 'Trace ILLIT', supabase_url: 'https://qmqcwopyvfqnbylxterr.supabase.co', supabase_anon_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtcWN3b3B5dmZxbmJ5bHh0ZXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NjQ1OTQsImV4cCI6MjA5NjE0MDU5NH0.cjw1XNTBceYHb4KKTzHI4NWEGRuI09ykD4Fl6BStmxg' },
];

function getAppConfig(id) {
  return APPS.find(function(a) { return a.id === id; }) || null;
}

# 投資工具

與 `wealth-dashboard` 分開的靜態公開工具網站。免登入；個人試算輸入只留在目前瀏覽器頁面。

## 本機開啟

直接開啟 `index.html`，或使用任何靜態檔案伺服器。台股 ETF 回測需瀏覽器可連線到證交所 API；美股退稅查詢需可連線至目前設定的唯讀 Apps Script 服務。

## 頁面

- 首頁：獨立複利試算區塊（逐年追加投入、報酬率、通膨與購買力）
- `etf-tax/`：免登入 ETF 歷史退稅比例查詢
- `dividend-calculator.html`：台股/美股配息估算
- `compound-calculator.html`：台股 ETF 歷史回測

功能盤點、搬移界線與待確認風險見 [MIGRATION_PLAN.md](MIGRATION_PLAN.md)。

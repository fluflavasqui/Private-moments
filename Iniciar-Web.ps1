$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Instale Node.js 20 ou superior e execute novamente.' }
Write-Host 'Abra http://127.0.0.1:3000 no navegador. Ctrl+C encerra o servidor.'
node server.cjs

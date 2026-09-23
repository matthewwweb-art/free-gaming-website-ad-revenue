$siteUrl = "https://games.matthew-web.com"
$hostName = "games.matthew-web.com"

$keyFile = Get-ChildItem -LiteralPath "public" -Filter "*.txt" |
  Where-Object { $_.BaseName.Length -eq 32 } |
  Select-Object -First 1

if (-not $keyFile) {
  Write-Host "No IndexNow key file found in public folder." -ForegroundColor Red
  exit 1
}

$indexNowKey = $keyFile.BaseName
$keyLocation = "$siteUrl/$indexNowKey.txt"

Write-Host "`n=== CHECK INDEXNOW KEY FILE ===" -ForegroundColor Cyan
Write-Host $keyLocation

$keyResponse = Invoke-WebRequest -Uri $keyLocation -UseBasicParsing -TimeoutSec 20

if ($keyResponse.StatusCode -ne 200 -or $keyResponse.Content.Trim() -ne $indexNowKey) {
  Write-Host "IndexNow key file check failed." -ForegroundColor Red
  exit 1
}

Write-Host "Key file verified."

Write-Host "`n=== DOWNLOAD SITEMAP ===" -ForegroundColor Cyan
[xml]$sitemap = (Invoke-WebRequest -Uri "$siteUrl/sitemap.xml" -UseBasicParsing).Content

$urls = @($sitemap.urlset.url | ForEach-Object { $_.loc })

Write-Host "URLs found:" $urls.Count

$body = @{
  host        = $hostName
  key         = $indexNowKey
  keyLocation = $keyLocation
  urlList     = $urls
} | ConvertTo-Json -Depth 5

Write-Host "`n=== SUBMIT TO INDEXNOW ===" -ForegroundColor Cyan

$response = Invoke-WebRequest `
  -Uri "https://api.indexnow.org/indexnow" `
  -Method Post `
  -ContentType "application/json; charset=utf-8" `
  -Body $body `
  -UseBasicParsing

Write-Host "Status:" $response.StatusCode

if ($response.StatusCode -eq 200 -or $response.StatusCode -eq 202) {
  Write-Host "IndexNow submission accepted." -ForegroundColor Green
} else {
  Write-Host "IndexNow returned unexpected status." -ForegroundColor Yellow
}

if ($response.Content) {
  Write-Host "Response:"
  Write-Host $response.Content
}

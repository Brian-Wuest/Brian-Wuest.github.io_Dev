$currentPath = (Resolve-Path .\).Path
$buildPath = (Resolve-Path ..\Brian-Wuest.github.io).Path

Get-ChildItem $buildPath -Include *.js -Recurse | foreach ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.css -Recurse | foreach ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.eot -Recurse | foreach ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.gif -Recurse | foreach ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.png -Recurse | foreach ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.svg -Recurse | foreach ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.ttf -Recurse | foreach ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.woff -Recurse | foreach ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.woff2 -Recurse | foreach ($_) { Remove-Item $_.FullName }

ng build --prod

Get-ChildItem .\dist -Recurse | foreach ($_) { Copy-Item -Path $_.FullName -Destination $buildPath -Force }

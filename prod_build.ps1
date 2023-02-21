$buildPath = (Resolve-Path ..\Brian-Wuest.github.io).Path

Get-ChildItem $buildPath -Include *.js -Recurse | ForEach-Object ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.css -Recurse | ForEach-Object ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.eot -Recurse | ForEach-Object ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.gif -Recurse | ForEach-Object ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.png -Recurse | ForEach-Object ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.svg -Recurse | ForEach-Object ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.ttf -Recurse | ForEach-Object ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.woff -Recurse | ForEach-Object ($_) { Remove-Item $_.FullName }
Get-ChildItem $buildPath -Include *.woff2 -Recurse | ForEach-Object ($_) { Remove-Item $_.FullName }

ng build --configuration production

Copy-Item -Path .\dist\* -Destination $buildPath -Recurse -Force

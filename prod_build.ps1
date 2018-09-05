$currentPath = (Resolve-Path .\).Path
$buildPath = (Resolve-Path ..\Brian-Wuest.github.io).Path

Get-ChildItem $buildPath -Include *.js -Recurse | foreach ($_) {Remove-Item $_.FullName}
Get-ChildItem $buildPath -Include *.css -Recurse | foreach ($_) {Remove-Item $_.FullName}

ng build --prod --output-path=$buildPath

#! /bin/csh

foreach dir (ex*) 
rm -rf ../ramakocherlakota.github.io/levelup-2017-rxjs/$dir
mkdir ../ramakocherlakota.github.io/levelup-2017-rxjs/$dir
cp $dir/index.html ../ramakocherlakota.github.io/levelup-2017-rxjs/$dir/
cp -r $dir/dist ../ramakocherlakota.github.io/levelup-2017-rxjs/$dir/
end

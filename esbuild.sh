set -xe
for dir in $(find ./src -name entry-\*.mjs | xargs -n1 dirname | uniq); do
    for entry in $dir/entry*.mjs; do
        npm exec -- esbuild --target=es6 --bundle --outdir=dist/$(basename "${dir#./src/}")/esbuild $entry
    done
done

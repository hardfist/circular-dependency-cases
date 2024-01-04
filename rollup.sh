set -xe
for dir in $(find ./src -name entry-\*.mjs | xargs -n1 dirname | uniq); do
    for entry in $dir/entry*.mjs; do
        npm exec -- rollup --output.format=cjs --output.dir=dist/$(basename "${dir#./src/}")/rollup $entry
    done
done

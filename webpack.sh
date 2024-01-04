set -xe
for dir in $(find ./src -name entry-\*.mjs | xargs -n1 dirname | uniq); do
    for entry in $dir/entry*.mjs; do
        npm exec -- webpack build --target=node --mode=none --entry=$entry -o dist/$(basename "${dir#./src/}")/webpack --output-filename $(basename "${entry%.mjs}.js")
    done
done

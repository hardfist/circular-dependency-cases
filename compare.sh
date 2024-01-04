# set -x
for case in $(ls ./dist | sort); do
    for bundler in $(ls "./dist/$case" | sort); do
        for entry in $(find "./dist/$case/$bundler" -name "entry*.js" | sort); do
            bn="$(basename $entry)"
            real="./src/$case/${bn%.js}.mjs"
            diff="$( node "$real" 2>&1 | ( node "$entry" 2>&1 | ( diff --changed-group-format="< %<> %>" /dev/fd/3 /dev/fd/4 ) 4<&0 ) 3<&0 )"
            diff_code=$?
            if [ $diff_code -ne 0 ]; then
                echo "$entry differed:"
                # some diff commands have slightly different outputs
                # only show changed lines
                echo "$(printf "$diff" | grep -e "^[<>]")"
            fi
        done
    done
done

rm output.txt
cat input.txt | \
    sed -e 's/Sa/S/g' | \
    sed -e 's/Ri/R/g' | \
    sed -e 's/Ga/G/g' | \
    sed -e 's/Ma/M/g' | \
    sed -e 's/Pa/P/g' | \
    sed -e 's/Da/D/g' | \
    sed -e 's/Ni/N/g' | \
    sed -e 's/\^/+/g' | \
    sed -e 's/_/-/g'  >> output.txt

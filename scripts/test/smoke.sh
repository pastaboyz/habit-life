targetUrl=$1
echo Running smoke test against: $targetUrl

req=`curl -sI $targetUrl`
body=`curl -s $targetUrl`

assert-contains () {
  if [[ "$2" == *"$1"* ]]; then
    echo "  ✓ Expected ${3:-string} to contain '$1'"
    return 0
  fi
  echo "  ✕ Expected to ${3:-string} contain '$1' but could not be found:"
  echo;echo;
  echo "$2"
  exit 1
}

assert-contains 'HTTP/2 200' "$req" request
assert-contains 'content-type: text/html' "$req" request

assert-contains '<!DOCTYPE html>' "$body" document
assert-contains '<html lang="en">' "$body" document
assert-contains 'charSet="utf-8"' "$body" head

exit 0
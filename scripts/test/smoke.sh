targetUrl=$1
echo Running smoke test against: $targetUrl

req=`curl -sI $targetUrl`
body=`curl -s $targetUrl`

assert-contains () {
  lowercasedA=$(echo "$1" | tr '[:upper:]' '[:lower:]')
  lowercasedB=$(echo "$2" | tr '[:upper:]' '[:lower:]')
  if [[ "$lowercasedB" == *"$lowercasedA"* ]]; then
    echo "  ✓ Expected ${3:-string} to contain '$1'"
    return 0
  fi
  echo "  ✕ Expected ${3:-string} to contain '$1' but could not be found:"
  echo;
  echo "$2"
  echo;
  exit 1
}

status="$(echo "$req" | grep HTTP/)"
assert-contains '200' "$status" status

assert-contains 'content-type: text/html' "$req" reponse

assert-contains '<!DOCTYPE html>' "$body" document
assert-contains '<html lang="en">' "$body" document
assert-contains 'charSet="utf-8"' "$body" head

exit 0
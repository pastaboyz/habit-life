npm run build
npm run start &
sleep 2s

echo "Running Tests"
bash "$(dirname "${BASH_SOURCE[0]}")/smoke.sh" http://localhost:3000/

# cleanup
kill $!
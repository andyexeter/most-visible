#!/usr/bin/env bash

# This script bumps version numbers in the following files:
#	src/most-visible.js - Bumps the version number in the top comment block.
#	package.json - Bumps the version field.
#
# Usage: ./bin/bump-version.sh <version-from> <version-to>
# 	e.g: ./bin/bump-version.sh 1.1.1 2.0

if [ $1 == "" ]; then
	echo "No from version set. Exiting"
	exit
fi

if [ $2 == "" ]; then
	echo "No to version set. Exiting"
	exit
fi

read -r -p "Bump version number from $1 to $2? [Y/n]: " confirm

case $confirm in
	[Nn][Oo]|[Nn])
		echo "Exiting"
		exit
		;;
esac

function bump() {
	echo -n "Updating $1..."
	sed -i "s/$2/$3/1w bumpchangelog.tmp" $1
	if [ -s bumpchangelog.tmp ]; then
		echo "Done"
	else
		echo "Nothing to change"
	fi
	rm -f bumpchangelog.tmp
}

bump src/most-visible.js " \* Most Visible v$1" " \* Most Visible v$2"
bump package.json "\"version\": \"$1\"" "\"version\": \"$2\""

grunt

#!/usr/bin/env bash

# This script bumps version numbers in the following files:
#	src/most-visible.js - Bumps the version number in the top comment block.
#	package.json - Bumps the version field.
#
# Usage: ./bin/bump-version.sh <major|minor|patch> - Increments the relevant version part by one.
#
# Usage 2: ./bin/bump-version.sh <version-from> <version-to>
# 	e.g: ./bin/bump-version.sh 1.1.1 2.0

if [ "$1" == "" ]; then
	echo "No 'from' version set. Exiting"
	exit 1
fi

if [ "$1" == "major" ] || [ "$1" == "minor" ] || [ "$1" == "patch" ]; then
	currentversion=$(grep -Po '(?<="version": ")[^"]*' package.json)

	IFS='.' read -a versionparts <<< "$currentversion"

	major=${versionparts[0]}
	minor=${versionparts[1]}
	patch=${versionparts[2]}

	case "$1" in
		"major")
			major=$((major + 1))
			;;
		"minor")
			minor=$((minor + 1))
			;;
		"patch")
			patch=$((patch + 1))
			;;
	esac
	toversion="$major.$minor.$patch"
else
	if [ "$2" == "" ]; then
		echo "No 'to' version set. Exiting"
		exit 1
	fi
	currentversion="$1"
	toversion="$2"
fi

if ! [[ "$toversion" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
	echo "'to' version doesn't look like a valid semver version tag (e.g: 1.2.3). Exiting"
	exit 1
fi

read -r -p "Bump version number from $currentversion to $toversion? [Y/n]: " confirm

case "$confirm" in
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

bump src/most-visible.js " \* Most Visible v$currentversion" " \* Most Visible v$toversion"
bump package.json "\"version\": \"$currentversion\"" "\"version\": \"$toversion\""

grunt

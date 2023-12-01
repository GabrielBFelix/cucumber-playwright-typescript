#cucumber tag
set tag=%1

set COMMON_CONFIG_FILE=env/common.env

#run cucumber tests & on failure run postcucumber
npm run cucumber -- --profile %tag% || yarn run postcucumber
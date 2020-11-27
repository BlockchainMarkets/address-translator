#!/bin/bash

zip -r function.zip . -x .git/\*
aws lambda update-function-code --function-name bcm-bch-address-conversion --zip-file fileb://function.zip

#!/bin/bash
source .env

# Make sure to run `npm run build` before deploying
aws s3 cp ${WORKING_DIR}/out/ s3://${BUCKET_NAME} --recursive --profile ${AWS_PROFILE} \
&& aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION} --paths "/*" --profile ${AWS_PROFILE}
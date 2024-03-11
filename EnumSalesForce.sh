#!/bin/bash

# Check if a domain was provided
if [ -z "$1" ]; then
  echo "Usage: $0 <domain>"
  exit 1
fi

# Salesforce-related paths to test
paths=(
  "/one/one.app"
  "/_ui/common/apex/debug/ApexCSIPage"
  "/console"
  "/setup/setup.jsp"
  "/soap/ajax/XX.X/connection.js"
  "/services/Soap/u/XX.X"
  "/services/data/vXX.X/"
  "/servlet/servlet.FileDownload?file="
  "/servlet/servlet.OrgExport"
  "/servlet/servlet.ReportList"
  "/servlet/servlet.Integration?lid="
  "/servlet/servlet.EmailAttachmentDownload"
  "/_ui/core/userprofile/UserProfilePage"
  "/ui/setup/Setup"
  "/_ui/common/config/entity/ConfigEntityUI"
  "/ltng/switcher?destination=classic"
  "/p/setup/custent/CustomObjectsPage"
  "/_ui/networks/setup/SetupNetworksPage"
  "/ui/setup/apex/ApexTestQueuePage"
  "/_ui/system/security/SessionManagementPage"
)

# Loop through each path and check the HTTP status code
for path in "${paths[@]}"; do
  # Use curl to fetch the HTTP status code
  status=$(curl -L -o /dev/null -s -w "%{http_code}\n" --insecure "https://$1$path")

  # Print the path and HTTP status code
  echo "$path: HTTP Status $status"
done

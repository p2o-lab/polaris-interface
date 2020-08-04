polaris-interface
----------------

[![npm version](https://badge.fury.io/js/%40p2olab%2Fpolaris-interface.svg)](https://badge.fury.io/js/%40p2olab%2Fpolaris-interface)

Interfaces for *polaris-frontend* and *polaris-backend*

# PUBLISH

## do-it-yourself 
:exclamation: Sonatype-Nexus server is part of the PLT/SVT-Network! 

First of all: login to npm repository manager system.
```shell script
npm login
```
Then publish ...
```shell script
npm version [major|minor|patch]
```
OR
```shell script
npm version patch -m "Upgrade to %s for reasons"
```
Then publish ...
```shell script
npm publish
```

automatically builds and deploys application to local Sonatype-Nexus server

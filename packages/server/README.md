## Structure

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`aprouter/` | approuter goes here
`db/` | domain models and data go here
`srv/` | service models and code go here
`mta.yaml` | build configuration for deployment to BTP
`package.json` | project metadata and configuration
`readme.md` | this guide


## Run locally

Only needed after MTA was built:\
Run `npm i`

Start CAP app in one terminal:\
Run `npm run hybrid`

Start approuter in another terminal:\
Run `npm run approuter`

## Build MTA

Run `mbt build`

## Deploy to BTP

Run `cf deploy mta_archives/bookshop-ts_1.0.0.mtar`

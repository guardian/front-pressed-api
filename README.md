Server-less API for front pressed time.

## Usage

* `/{stage}/{environment}?path={path}` e.g. `/code/live/?path=uk` or `/prod/draft/?path=uk/politics` Returns the ISO 8601 last pressed date in a JSON payload.

### URL parameters

* `?stage=CODE`. Application stage, defaults `PROD`

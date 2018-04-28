# JS Performance Workshop 2018-04-28

## Agenda

* DevTools
  * `node --inspect-brk server.js`
  * Use the 'Profiler' tab

* `cpuprofile`
  * Use `v8-profiler` or `cli-profile` to generate `.cpuprofile` files.
    * (Note: file format is an older version of what you'd find in DevTools)
  * Then use `cpuprofile2stackcollapse` with Brendan Gregg's Flamegraph tools.
    * `cat profileXXXX.cpuprofile | cpuprofile2stackcollapse | flamegraph.pl`
  * Or use `pflames`

* V8 builtin profiler
  * Use `node --prof server.js`
    * Be sure to have `process.on('SIGINT', process.exit)`
  * Then use `node --prof-process isolate*.log`
  * Or use `pflames`

* perf (Linux only)
  * Use `perf record -a -g -F 999 -- node --perf-basic-prof server.js`
  * Then use `perf report`
  * Or use `perf script | stackcollapse-perf.pl | flamegraph.pl`
  * Or use `pflames

* 0x
  * Use `0x server.js`

* Don't forget diffing!

## Tools Used and Useful Links

* [`pflames`](https://www.npmjs.com/package/pflames)
* [`cli-profile`](https://www.npmjs.com/package/cli-profile)
* [`v8-profiler`](https://www.npmjs.com/package/v8-profiler)
* [`cpuprofile2stackcollapse`](https://www.npmjs.com/package/cpuprofile2stackcollapse)
* [`0x`](https://www.npmjs.com/package/0x)
* [`perf`](https://perf.wiki.kernel.org/index.php/Main_Page)
* [Brendan Gregg's Flamegraph](http://www.brendangregg.com/flamegraphs.html)
* [Creating V8 profiling timeline plots](https://www.chromium.org/developers/creating-v8-profiling-timeline-plots)


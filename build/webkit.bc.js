{
  srcLoader:"../lib/require.js",

  destBasePath:"desktop",

  staticHasFlags:{
    "dom":1,
    "dom-addEventListener":1,
    //"console-log-apply"
    "loader-node":0,
    "loader-injectApi":1,
    "loader-timeoutApi":0,
    "loader-traceApi":0,
    "loader-catchApi":1,
    "loader-pageLoadApi":1,
    "loader-errorApi":1,
    "loader-sniffApi":0,
    "loader-undefApi":0,
    "loader-publish-privates":0,
    "loader-requirejsApi":0,
    "loader-createHas":1,
    "loader-createHasModule":1,
    "loader-amdFactoryScan":0
  },

  has:"../../bdBuild/lib/has/bdLoadHas.js",

  noCopy:1,

  noDefaultPackage:1
}

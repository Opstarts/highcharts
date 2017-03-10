/**
 * Following order from `build.xml` as a guideline in case funky things happen when out of order
 */
'use strict';

import Highcharts from '../parts/Globals.js';

import '../parts/Html.js';
import '../parts/PlotLineOrBand.js';
import '../parts/Axis.js';
import '../parts/DateTimeAxis.js';

// Dynamics and Interaction
// Required for tooltips and mouse events
import '../parts/Tooltip.js';
import '../parts/Pointer.js';
import '../parts/TouchPointer.js';
// import '../parts/MSPointer.js';

// Basic Chart components
import '../parts/Legend.js';
import '../parts/Chart.js';
import '../parts/Point.js';
import '../parts/Series.js';
import '../parts/Stacking.js';

// Required for `Chart.addSeries()` and `Series.remove()`
import '../parts/Dynamics.js';

// Charts and Serie Types
import '../parts/AreaSeries.js';
import '../parts/SplineSeries.js';
import '../parts/ColumnSeries.js';
import '../parts/BarSeries.js';
import '../parts/PieSeries.js';
import '../parts-more/WaterfallSeries.js';
import '../parts/DataLabels.js';

// Required for ... interaction?
import '../parts/Interaction.js';

// Extra Modules
import '../modules/exporting.src.js';
import '../modules/offline-exporting.src.js';
import '../modules/no-data-to-display.src.js';

export default Highcharts;

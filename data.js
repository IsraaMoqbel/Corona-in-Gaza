const data = [
{"Date":"03/22/2020","Cases":"2","Deaths":"0","Daily cases":"","Daily deaths":""},
{"Date":"03/23/2020","Cases":"2","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"03/24/2020","Cases":"2","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"03/25/2020","Cases":"2","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"03/26/2020","Cases":"9","Deaths":"0","Daily cases":"7","Daily deaths":"0"},
{"Date":"03/27/2020","Cases":"9","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"03/28/2020","Cases":"9","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"03/29/2020","Cases":"9","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"03/30/2020","Cases":"9","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"03/31/2020","Cases":"10","Deaths":"0","Daily cases":"1","Daily deaths":"0"},
{"Date":"04/01/2020","Cases":"12","Deaths":"0","Daily cases":"2","Daily deaths":"0"},
{"Date":"04/02/2020","Cases":"12","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/03/2020","Cases":"12","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/04/2020","Cases":"12","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/05/2020","Cases":"12","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/06/2020","Cases":"12","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/07/2020","Cases":"13","Deaths":"0","Daily cases":"1","Daily deaths":"0"},
{"Date":"04/08/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/09/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/10/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/11/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/12/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/13/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/14/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/15/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/16/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/17/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/18/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/19/2020","Cases":"13","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/20/2020","Cases":"15","Deaths":"0","Daily cases":"2","Daily deaths":"0"},
{"Date":"04/21/2020","Cases":"17","Deaths":"0","Daily cases":"2","Daily deaths":"0"},
{"Date":"04/22/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/23/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/24/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/25/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/26/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/27/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/28/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/29/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"04/30/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/01/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/02/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/03/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/04/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/05/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/06/2020","Cases":"17","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/07/2020","Cases":"20","Deaths":"0","Daily cases":"3","Daily deaths":"0"},
{"Date":"05/08/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/09/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/10/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/11/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/12/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/13/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/14/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/15/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/16/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/17/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/18/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/19/2020","Cases":"20","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/20/2020","Cases":"30","Deaths":"0","Daily cases":"10","Daily deaths":"0"},
{"Date":"05/21/2020","Cases":"30","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/22/2020","Cases":"55","Deaths":"0","Daily cases":"25","Daily deaths":"0"},
{"Date":"05/23/2020","Cases":"55","Deaths":"0","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/24/2020","Cases":"55","Deaths":"1","Daily cases":"0","Daily deaths":"1"},
{"Date":"05/25/2020","Cases":"55","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/26/2020","Cases":"58","Deaths":"1","Daily cases":"3","Daily deaths":"0"},
{"Date":"05/27/2020","Cases":"61","Deaths":"1","Daily cases":"3","Daily deaths":"0"},
{"Date":"05/28/2020","Cases":"61","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/29/2020","Cases":"61","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/30/2020","Cases":"61","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"05/31/2020","Cases":"61","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/01/2020","Cases":"61","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/02/2020","Cases":"61","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/03/2020","Cases":"61","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/04/2020","Cases":"69","Deaths":"1","Daily cases":"8","Daily deaths":"0"},
{"Date":"06/05/2020","Cases":"70","Deaths":"1","Daily cases":"1","Daily deaths":"0"},
{"Date":"06/06/2020","Cases":"70","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/07/2020","Cases":"70","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/08/2020","Cases":"70","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/09/2020","Cases":"70","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/10/2020","Cases":"70","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/11/2020","Cases":"70","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/12/2020","Cases":"70","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/13/2020","Cases":"70","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/14/2020","Cases":"70","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/15/2020","Cases":"72","Deaths":"1","Daily cases":"2","Daily deaths":"0"},
{"Date":"06/16/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/17/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/18/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/19/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/20/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/21/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/22/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/23/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/24/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/25/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/26/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/27/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/28/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/29/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"06/30/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/01/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/02/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/03/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/04/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/05/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/06/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/07/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/08/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/09/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/10/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/11/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/12/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/13/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/14/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/15/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/16/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/17/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/18/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/19/2020","Cases":"72","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/20/2020","Cases":"74","Deaths":"1","Daily cases":"2","Daily deaths":"0"},
{"Date":"07/21/2020","Cases":"74","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/22/2020","Cases":"75","Deaths":"1","Daily cases":"1","Daily deaths":"0"},
{"Date":"07/23/2020","Cases":"75","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/24/2020","Cases":"75","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/25/2020","Cases":"76","Deaths":"1","Daily cases":"1","Daily deaths":"0"},
{"Date":"07/26/2020","Cases":"76","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/27/2020","Cases":"76","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/28/2020","Cases":"76","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/29/2020","Cases":"76","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/30/2020","Cases":"76","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"07/31/2020","Cases":"78","Deaths":"1","Daily cases":"2","Daily deaths":"0"},
{"Date":"08/01/2020","Cases":"78","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/02/2020","Cases":"78","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/03/2020","Cases":"78","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/04/2020","Cases":"78","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/05/2020","Cases":"78","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/06/2020","Cases":"78","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/07/2020","Cases":"78","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/08/2020","Cases":"78","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/09/2020","Cases":"78","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/10/2020","Cases":"81","Deaths":"1","Daily cases":"3","Daily deaths":"0"},
{"Date":"08/11/2020","Cases":"81","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/12/2020","Cases":"81","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/13/2020","Cases":"81","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/14/2020","Cases":"82","Deaths":"1","Daily cases":"1","Daily deaths":"0"},
{"Date":"08/15/2020","Cases":"83","Deaths":"1","Daily cases":"1","Daily deaths":"0"},
{"Date":"08/16/2020","Cases":"83","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/17/2020","Cases":"83","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/18/2020","Cases":"91","Deaths":"1","Daily cases":"8","Daily deaths":"0"},
{"Date":"08/19/2020","Cases":"100","Deaths":"1","Daily cases":"9","Daily deaths":"0"},
{"Date":"08/20/2020","Cases":"","Deaths":"1","Daily cases":"","Daily deaths":"0"},
{"Date":"08/21/2020","Cases":"109","Deaths":"1","Daily cases":"109","Daily deaths":"0"},
{"Date":"08/22/2020","Cases":"109","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/23/2020","Cases":"109","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/24/2020","Cases":"109","Deaths":"1","Daily cases":"0","Daily deaths":"0"},
{"Date":"08/25/2020","Cases":"","Deaths":"","Daily cases":"","Daily deaths":""},
{"Date":"08/26/2020","Cases":"125","Deaths":"2","Daily cases":"125","Daily deaths":"2"},
{"Date":"08/27/2020","Cases":"192","Deaths":"3","Daily cases":"67","Daily deaths":"1"},
{"Date":"08/28/2020","Cases":"221","Deaths":"3","Daily cases":"29","Daily deaths":"0"},
{"Date":"08/29/2020","Cases":"257","Deaths":"3","Daily cases":"36","Daily deaths":"0"},
{"Date":"08/30/2020","Cases":"","Deaths":"","Daily cases":"","Daily deaths":""},
{"Date":"08/31/2020","Cases":"356","Deaths":"4","Daily cases":"356","Daily deaths":"4"},
{"Date":"09/01/2020","Cases":"400","Deaths":"5","Daily cases":"44","Daily deaths":"1"},
{"Date":"09/02/2020","Cases":"483","Deaths":"5","Daily cases":"83","Daily deaths":"0"},
{"Date":"09/03/2020","Cases":"581","Deaths":"5","Daily cases":"98","Daily deaths":"0"},
{"Date":"09/04/2020","Cases":"697","Deaths":"5","Daily cases":"116","Daily deaths":"0"},
{"Date":"09/05/2020","Cases":"807","Deaths":"5","Daily cases":"110","Daily deaths":"0"},
{"Date":"09/06/2020","Cases":"969","Deaths":"7","Daily cases":"162","Daily deaths":"2"},
{"Date":"09/07/2020","Cases":"1151","Deaths":"8","Daily cases":"182","Daily deaths":"1"},
{"Date":"09/08/2020","Cases":"1269","Deaths":"9","Daily cases":"118","Daily deaths":"1"},
{"Date":"09/09/2020","Cases":"1356","Deaths":"9","Daily cases":"87","Daily deaths":"0"},
{"Date":"09/10/2020","Cases":"1551","Deaths":"10","Daily cases":"195","Daily deaths":"1"},
{"Date":"09/11/2020","Cases":"1631","Deaths":"11","Daily cases":"80","Daily deaths":"1"},
{"Date":"09/12/2020","Cases":"1719","Deaths":"13","Daily cases":"88","Daily deaths":"2"},
{"Date":"09/13/2020","Cases":"1819","Deaths":"15","Daily cases":"100","Daily deaths":"2"},
{"Date":"09/14/2020","Cases":"1927","Deaths":"15","Daily cases":"108","Daily deaths":"0"},
{"Date":"09/15/2020","Cases":"2006","Deaths":"15","Daily cases":"79","Daily deaths":"0"},
{"Date":"09/16/2020","Cases":"2100","Deaths":"16","Daily cases":"94","Daily deaths":"1"},
{"Date":"09/17/2020","Cases":"2176","Deaths":"16","Daily cases":"76","Daily deaths":"0"},
{"Date":"09/18/2020","Cases":"2223","Deaths":"17","Daily cases":"47","Daily deaths":"1"},
{"Date":"09/19/2020","Cases":"2313","Deaths":"17","Daily cases":"90","Daily deaths":"0"},
{"Date":"09/20/2020","Cases":"2358","Deaths":"17","Daily cases":"45","Daily deaths":"0"},
{"Date":"09/21/2020","Cases":"2400","Deaths":"17","Daily cases":"42","Daily deaths":"0"},
{"Date":"09/22/2020","Cases":"2445","Deaths":"17","Daily cases":"45","Daily deaths":"0"},
{"Date":"09/23/2020","Cases":"2518","Deaths":"17","Daily cases":"73","Daily deaths":"0"},
{"Date":"09/24/2020","Cases":"2613","Deaths":"17","Daily cases":"95","Daily deaths":"0"},
{"Date":"09/25/2020","Cases":"2658","Deaths":"17","Daily cases":"45","Daily deaths":"0"},
{"Date":"09/26/2020","Cases":"2725","Deaths":"19","Daily cases":"67","Daily deaths":"2"},
{"Date":"09/27/2020","Cases":"2791","Deaths":"21","Daily cases":"66","Daily deaths":"2"},
{"Date":"09/28/2020","Cases":"2826","Deaths":"21","Daily cases":"35","Daily deaths":"0"},
{"Date":"09/29/2020","Cases":"2911","Deaths":"21","Daily cases":"85","Daily deaths":"0"},
{"Date":"09/30/2020","Cases":"2948","Deaths":"21","Daily cases":"37","Daily deaths":"0"},
{"Date":"10/01/2020","Cases":"3075","Deaths":"22","Daily cases":"127","Daily deaths":"1"},
{"Date":"10/02/2020","Cases":"3184","Deaths":"22","Daily cases":"109","Daily deaths":"0"},
{"Date":"10/03/2020","Cases":"3298","Deaths":"22","Daily cases":"114","Daily deaths":"0"},
{"Date":"10/04/2020","Cases":"3354","Deaths":"22","Daily cases":"56","Daily deaths":"0"},
{"Date":"10/05/2020","Cases":"3427","Deaths":"23","Daily cases":"73","Daily deaths":"1"},
{"Date":"10/06/2020","Cases":"3573","Deaths":"23","Daily cases":"146","Daily deaths":"0"},
{"Date":"10/07/2020","Cases":"3700","Deaths":"23","Daily cases":"127","Daily deaths":"0"},
{"Date":"10/08/2020","Cases":"3751","Deaths":"24","Daily cases":"51","Daily deaths":"1"},
{"Date":"10/09/2020","Cases":"3839","Deaths":"24","Daily cases":"88","Daily deaths":"0"},
{"Date":"10/10/2020","Cases":"3897","Deaths":"24","Daily cases":"58","Daily deaths":"0"},
{"Date":"10/11/2020","Cases":"3984","Deaths":"24","Daily cases":"87","Daily deaths":"0"},
{"Date":"10/12/2020","Cases":"4102","Deaths":"26","Daily cases":"118","Daily deaths":"2"},
{"Date":"10/13/2020","Cases":"4175","Deaths":"26","Daily cases":"73","Daily deaths":"0"},
{"Date":"10/14/2020","Cases":"4285","Deaths":"26","Daily cases":"110","Daily deaths":"0"},
{"Date":"10/15/2020","Cases":"4366","Deaths":"26","Daily cases":"81","Daily deaths":"0"},
{"Date":"10/16/2020","Cases":"4440","Deaths":"26","Daily cases":"74","Daily deaths":"0"},
{"Date":"10/17/2020","Cases":"4526","Deaths":"26","Daily cases":"86","Daily deaths":"0"},
{"Date":"10/18/2020","Cases":"4645","Deaths":"27","Daily cases":"119","Daily deaths":"1"},
{"Date":"10/19/2020","Cases":"4722","Deaths":"28","Daily cases":"77","Daily deaths":"1"},
{"Date":"10/20/2020","Cases":"4821","Deaths":"28","Daily cases":"99","Daily deaths":"0"},
{"Date":"10/21/2020","Cases":"4955","Deaths":"28","Daily cases":"134","Daily deaths":"0"},
{"Date":"10/22/2020","Cases":"5079","Deaths":"29","Daily cases":"124","Daily deaths":"1"},
{"Date":"10/23/2020","Cases":"5175","Deaths":"30","Daily cases":"96","Daily deaths":"1"},
{"Date":"10/24/2020","Cases":"5331","Deaths":"31","Daily cases":"156","Daily deaths":"1"},
{"Date":"10/25/2020","Cases":"5442","Deaths":"31","Daily cases":"111","Daily deaths":"0"},
{"Date":"10/26/2020","Cases":"5594","Deaths":"31","Daily cases":"152","Daily deaths":"0"},
{"Date":"10/27/2020","Cases":"5793","Deaths":"31","Daily cases":"199","Daily deaths":"0"},
{"Date":"10/28/2020","Cases":"5893","Deaths":"31","Daily cases":"100","Daily deaths":"0"},
{"Date":"10/29/2020","Cases":"6169","Deaths":"32","Daily cases":"276","Daily deaths":"1"},
{"Date":"10/30/2020","Cases":"6347","Deaths":"33","Daily cases":"178","Daily deaths":"1"},
{"Date":"10/31/2020","Cases":"6545","Deaths":"34","Daily cases":"198","Daily deaths":"1"},
{"Date":"11/01/2020","Cases":"6730","Deaths":"34","Daily cases":"185","Daily deaths":"0"},
{"Date":"11/02/2020","Cases":"7002","Deaths":"34","Daily cases":"272","Daily deaths":"0"},
{"Date":"11/03/2020","Cases":"7231","Deaths":"37","Daily cases":"229","Daily deaths":"3"},
{"Date":"11/04/2020","Cases":"7512","Deaths":"37","Daily cases":"281","Daily deaths":"0"},
{"Date":"11/05/2020","Cases":"7760","Deaths":"37","Daily cases":"248","Daily deaths":"0"},
{"Date":"11/06/2020","Cases":"8019","Deaths":"37","Daily cases":"259","Daily deaths":"0"},
{"Date":"11/07/2020","Cases":"8269","Deaths":"37","Daily cases":"250","Daily deaths":"0"},
{"Date":"11/08/2020","Cases":"8470","Deaths":"38","Daily cases":"201","Daily deaths":"1"},
{"Date":"11/09/2020","Cases":"8740","Deaths":"39","Daily cases":"270","Daily deaths":"1"},
{"Date":"11/10/2020","Cases":"8931","Deaths":"42","Daily cases":"191","Daily deaths":"3"},
{"Date":"11/11/2020","Cases":"9231","Deaths":"43","Daily cases":"300","Daily deaths":"1"},
{"Date":"11/12/2020","Cases":"9542","Deaths":"44","Daily cases":"311","Daily deaths":"1"},
{"Date":"11/13/2020","Cases":"9816","Deaths":"45","Daily cases":"274","Daily deaths":"1"},
{"Date":"11/14/2020","Cases":"10126","Deaths":"46","Daily cases":"310","Daily deaths":"1"},
{"Date":"11/15/2020","Cases":"10532","Deaths":"48","Daily cases":"406","Daily deaths":"2"},
{"Date":"11/16/2020","Cases":"10985","Deaths":"48","Daily cases":"453","Daily deaths":"0"},
{"Date":"11/17/2020","Cases":"11471","Deaths":"50","Daily cases":"486","Daily deaths":"2"},
{"Date":"11/18/2020","Cases":"12071","Deaths":"54","Daily cases":"600","Daily deaths":"4"},
{"Date":"11/19/2020","Cases":"12439","Deaths":"56","Daily cases":"368","Daily deaths":"2"},
{"Date":"11/20/2020","Cases":"13193","Deaths":"58","Daily cases":"754","Daily deaths":"2"},
{"Date":"11/21/2020","Cases":"14084","Deaths":"62","Daily cases":"891","Daily deaths":"4"},
{"Date":"11/22/2020","Cases":"14768","Deaths":"65","Daily cases":"684","Daily deaths":"3"},
{"Date":"11/23/2020","Cases":"15457","Deaths":"69","Daily cases":"689","Daily deaths":"4"},
{"Date":"11/24/2020","Cases":"16142","Deaths":"72","Daily cases":"685","Daily deaths":"3"},
{"Date":"11/25/2020","Cases":"16755","Deaths":"78","Daily cases":"613","Daily deaths":"6"},
{"Date":"11/26/2020","Cases":"17411","Deaths":"84","Daily cases":"656","Daily deaths":"6"},
{"Date":"11/27/2020","Cases":"18333","Deaths":"86","Daily cases":"922","Daily deaths":"2"},
{"Date":"11/28/2020","Cases":"19160","Deaths":"90","Daily cases":"827","Daily deaths":"4"},
{"Date":"11/29/2020","Cases":"19898","Deaths":"97","Daily cases":"738","Daily deaths":"7"},
{"Date":"11/30/2020","Cases":"20646","Deaths":"102","Daily cases":"748","Daily deaths":"5"},
{"Date":"12/01/2020","Cases":"21461","Deaths":"111","Daily cases":"815","Daily deaths":"9"},
{"Date":"12/02/2020","Cases":"22196","Deaths":"118","Daily cases":"735","Daily deaths":"7"},
{"Date":"12/03/2020","Cases":"23023","Deaths":"122","Daily cases":"827","Daily deaths":"4"},
]
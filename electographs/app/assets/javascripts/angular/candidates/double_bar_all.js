(function(){

  angular
  .module('app.candidates')
  .directive('barsAll',barsAll);

  barsAll.$inject = ['d3Factory', '$window'];

  function barsAll(d3Factory, $window){
    return{
      restrict: 'EA',
      templateUrl : 'partials/doubleBar.html',
      scope: {
        data: '='
      },
      link: function(scope, element, attrs){
        d3Factory.d3().then(function(d3){
          var margin = { top: 30, right:10, bottom: 100, left:80} ,
          w = 600 - margin.right - margin.left,
          h = 400 - margin.top - margin.bottom;
          var colors = ["#1020bd", "#db1a1a"];

          var svg = d3.select("#popularTweets")
          .append("svg")
          .attr({"width" : w + margin.right + margin.left,
          "height": h + margin.top + margin.bottom
          })
          .append('g')
          .attr("transform", "translate(" + margin.left + "," + margin.right +")")


        scope.render = function(data){
          svg.selectAll('*').remove();
          console.log(scope.data);
          if (!data) return;
          var tdata = d3.transpose(data.retweet_count, data.favorite_count);
          var series = 2;

        var x0Scale = d3.scale.ordinal()
          .domain(d3.range(data.length))
          .rangeRoundBands([0, w], 0.05); 
        
        
        var x1Scale = d3.scale.ordinal()
          .domain(d3.range(data.length))
          .rangeRoundBands([0, w], 0.05);
        
        var yScale = d3.scale.linear()
          .domain([0, d3.max(data, function(d) {return d.favorite_count;})]) 
          .range([h,0]);

        var favorite_count = function(d) {
          return d.favorite_count;
        };
        
        var text = function(d) {
          return d.text;
        };

        var xAxis = d3.svg.axis()
          .scale(x1Scale)
          .orient("bottom");

        var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

            var sets = svg.selectAll(".set") 
              .data(data) 
              .enter().append("g")
                      .attr("class","set")
               .attr("transform",function(d,i){
                   return "translate(" + x0Scale(i) + ",0)"
               })
              .on("mouseover", function(d,i) {
                  //Get this bar's x/y values, then augment for the tooltip
                  var xPosition = parseFloat(x0Scale(i) + x0Scale.rangeBand() / 6);
                  var yPosition = 0;

                  // create the text I want in the tooltip

                toolTipText = (`${d.candidate.na} \ ${d.text} \ Retweets:${d.favorite_count} \ Favors: ${d.retweet_count}`) 

                  //Update Tooltip Position & value
                  d3.select("#tooltip")
                      .style("left", xPosition + "px")
                      .style("top", yPosition + "px")
                      .select("#tweetText")
                      .text(toolTipText)
                  d3.select("#tooltip").classed("hidden", false);
              })
              .on("mouseout", function() {
                  //Remove the tooltip
                  d3.select("#tooltip").classed("hidden", true);
              }); 

            sets.append("rect")
                .attr("class","friend")
                .attr("width", x0Scale.rangeBand()/2)
                .attr("y", function(d) {
                    return yScale(d.retweet_count);
                })
                .attr("x", x0Scale.rangeBand()/2)
                .attr("height", function(d){
                    return h - yScale(d.retweet_count);
                })
                .attr("fill", colors[0])

            sets.append("rect")
                .attr("class","follow")
                .attr("width", x0Scale.rangeBand()/2)
                .attr("y", function(d) {
                    return yScale(d.favorite_count);
                })
                .attr("height", function(d){
                    return h - yScale(d.favorite_count);
                })
                .attr("fill", colors[1])

            svg.append("g")
              .attr("class", "yAxis")
              .call(yAxis)
          };

          scope.render(scope.data);
          scope.$watch('data', function(newVals, oldVals) {
            return scope.render(newVals);
          }, true);

        });
      }
    };
  };
})();


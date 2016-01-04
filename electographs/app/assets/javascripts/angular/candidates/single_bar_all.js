(function(){

  angular
  .module('app.candidates')
  .directive('singleAll',singleAll);

  singleAll.$inject = ['d3Factory', '$window'];

  function singleAll(d3Factory, $window){
    return{
      restrict: 'EA',
      templateUrl : 'partials/singleBar.html',
      scope: {
        data: '='
      },
      link: function(scope, element, attrs){
        d3Factory.d3().then(function(d3){
          var margin = { top: 30, right:0, bottom: 100, left:80} ,
           width = 500 - margin.right - margin.left,
           height = 400 - margin.top - margin.bottom;


          var svg = d3.select('.chart')
           .append('svg')
           .attr ({
             "width" : width + margin.right + margin.left,
             "height": height + margin.top + margin.bottom
           })
           .append('g')
           .attr("transform", "translate(" + margin.left + "," + margin.right +")")

        scope.render = function(data){

          var xScale = d3.scale.ordinal()
          .rangeRoundBands([0,width], 0.2, 0.2);

          var yScale = d3.scale.linear()
            .range([height, 0])
          
          
          // define x and y axis
          var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");
          //good start for a simple bar chart. 
          
          
          
          var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
          
          
          //look up what this is
          xScale.domain(data.map(function(d){
            return d.name;
          }));
          
          yScale.domain([0, d3.max(data, function(d){
            return d.number;
          })]);
          
          var sets = svg.selectAll(".set") 
              .data(data) 
              .enter().append("g")
              .attr("class","set")
               .attr("transform",function(d,i){
                   return "translate(" + i + ",0)"
               })
          
          //draw the bars
          sets.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr("height", 0)
            .attr('y', height)
            .transition().duration(2000)
            .delay(function(d, i) { return i + 200; })
            .attr ({
              'x': function(d) { return xScale(d.name)},
              'y': function(d) { return yScale(d.number)},
              'width': xScale.rangeBand()/5,
              'height': function(d) { return height - yScale(d.number)}
            })
            .style("fill", function(d, i){return 'rgb(20,20,' + ((i*30) + 100) + ')' })
          
          svg.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll('text')
            .attr("transform", "rotate(-60)")
            .style("text-anchor", "end")
          
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
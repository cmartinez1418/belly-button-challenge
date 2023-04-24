const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// // // Fetch the JSON data and console log it
// // d3.json(url).then(function(data) {
// //   console.log(data);
// // });

// const dataPromise = d3.json(url)
// console.log(dataPromise)

// getting data for 940 


// d3.json(url).then(function (data){
//     let top_ten = data.samples[0].sample_values.slice(0, 10).reverse();
//     // console.log(top_ten)
//     let top_ten_ids = data.samples[0].otu_ids.slice(0, 10).reverse();
//     // console.log(top_ten_ids)
//     // let top_ten_labels = 

d3.json(url).then(function (data){

    console.log(data);


    let names = data.names;
    let firstName = names[0]
    // console.log(names)
    let dropdownMenu = d3.select("#selDataSet");
    for (let i=0; i<names.length; i++) {
        dropdownMenu.append("option").text(names[i]).property("value", names[i]);
    // names.forEach((name) => {
    //     dropdownMenu.append("option").text(name).property("value", name)
    // })
    };

    // barchart

    let topTen = data.samples[0].sample_values.slice(0, 10).reverse();
    // console.log(topTen)
    let topTenIds = data.samples[0].otu_ids.slice(0, 10).reverse();
    // console.log(topTenIds)
    let topTenLabels = data.samples[0].otu_labels.slice(0,10).reverse();
    // console.log(topTenLabels)
    ylabels = topTenIds.map(id => `OTU_${id}`)
    

    let trace1 = {
        x: topTen,
        y: ylabels,
        type: "bar",
        orientation: "h",
        marker: {
            color: "rgb(200, 65, 65)"
        },
        text: topTenLabels
    }

    let data1= [trace1];
    Plotly.newPlot(bar, data1)

    // bubble plot

    let bubbleValues = data.samples[0].sample_values
    let bubbleIds = data.samples[0].otu_ids
    let bubbleLabels = data.samples[0].otu_labels

    let trace2 = {
        x: bubbleIds,
        y: bubbleValues,
        color: bubbleIds,
        mode: 'markers',
        marker: {
            color: bubbleIds,
            size: bubbleValues
        },
        text: bubbleLabels,
    }

    layout = {
        xaxis: {title: "OTU ID"}
    }

    let data2 = [trace2];
    Plotly.newPlot(bubble, data2, layout)

    // demographic information

    demoInfo = data.metadata;
    firstDemo = demoInfo[0]
    // console.log(firstDemo)
    Object.entries(firstDemo).forEach(([key,value]) => d3.select("#sample-metadata").append("p").text(`${key}: ${value}`));
    










});



     
            

        





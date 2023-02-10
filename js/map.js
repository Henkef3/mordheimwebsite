$(document).ready(function () {
    document.body.style.zoom = "50%"
    var test = 'https://docs.google.com/spreadsheets/d/1__L749yli7Zar4934eD88lec2ISSieG-6ud5qplwn_Q/gviz/tq?tqx=out:html&tq&gid=528195972'

    function ajax1() {
        // NOTE:  This function must return the value 
        //        from calling the $.ajax() method.
        return $.ajax({
            url:test    
        });
    }

    $.when(ajax1().done(function(a1){
        // the code here will be executed when all four ajax requests resolve.
        // a1, a2, a3 and a4 are lists of length 3 containing the response text,
        // status, and jqXHR object for each of the four ajax calls respectively.
         //console.log(a1)

         const parser = new DOMParser();
         const doc = parser.parseFromString(a1, 'text/html');
         const tdElements = Array.from(doc.querySelectorAll('td')).map(td => td.textContent);

         const removedEmpty = tdElements.slice(0, 5);
         const columns = tdElements.slice(5, 10);
         const remainingElements = tdElements.slice(10);

         const objects = [];
            for (let i = 0; i < remainingElements.length; i += 5) {
                const object = {};
                for (let j = 0; j < columns.length; j++) {
                    object[columns[j]] = remainingElements[i + j].replace(/<\/?td>/g, '');
                }
                objects.push(object);
        }
        
        allobjects = Object.values(objects) 

        /* 
        allobjects[key])[x][1]
        x
        0 District name
        1 District benefit
        2 Controlling warband
        3 Hard fought District
        4 Abundance of Wyrdstone

        keys allobjects 
         0 West gate
         1 South Gate
         2 East Gate
         3 River Gate
         4 Artistan Quarter
         5 Count Steinhardt's Palace
         6 Dwarven District
         7 Executioner's Square
         8 Memorial Gardens
         9 Raven Barracks
         10 Rich Quarter
         11 Statue of Count Gotthard
         12 Temple of Morr
         13 The Cemetery
         14 The Gaol
         15 Amphitheatre
         16 City Hall
         17 Clock Tower
         18 Fence Alley
         19 Little Moot
         20 Merchants' Quarter
         21 Market Square
         22 Poor Quarter
         23 Quayside
         24 Sage's Hall
         25 Temple of Sigmar
         26 The Great Library
         27 The Pit
         28 Middle Bridge
         29 The Rock
         30 Point of interest.
         31 Abundance of wyrdstone
         32 Hard fought district
        */

    $("#artisanquarter").click(function () {
        $("#titleofmodal").html("Artisan Quarter");      
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[4])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[4])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#countsteinhardtspalace").click(function () {
        $("#titleofmodal").html("Count Steinhardt's Palace");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[5])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[5])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#dwarvendistrict").click(function () {
        $("#titleofmodal").html("Dwarven District");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[6])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[6])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#executionerssquare").click(function () {
        $("#titleofmodal").html("Executioner's Square");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[7])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[7])[2][1]);
        });
    });
    $("#memorialgardens").click(function () {
        $("#titleofmodal").html("Memorial Gardens");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[8])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[8])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#ravenbarracks").click(function () {
        $("#titleofmodal").html("Raven Barracks");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[9])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[9])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#richquarter").click(function () {
        $("#titleofmodal").html("Rich Quarter");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[10])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[10])[2][1]);
        });

        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#statueofcountgotthard").click(function () {
        $("#titleofmodal").html("Statue of Count Gotthard");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[11])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[11])[2][1]);
        });

        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#templeofmorr").click(function () {
        $("#titleofmodal").html("Temple of Morr");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[12])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[12])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#thecemetery").click(function () {
        $("#titleofmodal").html("The Cemetery");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[13])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[13])[2][1]);
        });
    });
    $("#thegaol").click(function () {
        $("#titleofmodal").html("The Gaol");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[14])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[14])[2][1]);
        });
    });
    $("#amphitheatre").click(function () {
        $("#titleofmodal").html("Amphitheatre");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[15])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[15])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#cityhall").click(function () {
        $("#titleofmodal").html("City Hall");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[16])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[16])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#clocktower").click(function () {
        $("#titleofmodal").html("Clock Tower");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[17])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[17])[2][1]);
        });
    });
    $("#fencealley").click(function () {
        $("#titleofmodal").html("Fence Alley");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[18])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[18])[2][1]);
        });
    });
    $("#littlemoot").click(function () {
        $("#titleofmodal").html("Little Moot");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[19])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[19])[2][1]);
        });
    });
    $("#merchantsquarter").click(function () {
        $("#titleofmodal").html("Merchants' Quarter");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[20])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[20])[2][1]);
        });
    });
    $("#marketsquare").click(function () {
        $("#titleofmodal").html("Market Square");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[21])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[21])[2][1]);
        });

        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#poorquarter").click(function () {
        $("#titleofmodal").html("Poor Quarter");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[22])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[22])[2][1]);
        });

        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#quayside").click(function () {
        $("#titleofmodal").html("Quayside");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[23])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[23])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#sageshall").click(function () {
        $("#titleofmodal").html("Sage's Hall");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[24])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[24])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#templeofsigmar").click(function () {
        $("#titleofmodal").html("Temple of Sigmar");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[25])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[25])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#thegreatlibrary").click(function () {
        $("#titleofmodal").html("The Great Library");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[26])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[26])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#thepit").click(function () {
        $("#titleofmodal").html("The Pit");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[27])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[27])[2][1]);
        });

        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#middlebridge").click(function () {
        $("#titleofmodal").html("Middle Bridge");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[28])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[28])[2][1]);
        });

        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#therock").click(function () {
        $("#titleofmodal").html("The Rock");
        $(".modal-body").html("<br><br><b>District Benefit: District_Benefits<br><br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[29])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[29])[2][1]);
        });

        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#southgate").click(function () {
        $("#titleofmodal").html("South Gate");
        $(".modal-body").html("<br>District Benefit: District_Benefits<br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[0])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[1])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#rivergate").click(function () {
        $("#titleofmodal").html("River Gate");
        $(".modal-body").html("<br>District Benefit: District_Benefits<br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[0])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[3])[2][1]);
        });

        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#eastgate").click(function () {
        // $("#titleofmodal").html("East Gate <img src = '/images/skull.png' />");
        $(".modal-body").html("<br>District Benefit: District_Benefits<br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[0])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[2])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#westgate").click(function () {
        $("#titleofmodal").html("West Gate");
        $(".modal-body").html("<br>District Benefit: District_Benefits<br><b>Dominant Warband: </b>Dominant_Warbands");
        $(".modal-body").html(function(i, html) {
            return html.replace("District_Benefits", Object.entries(allobjects[0])[1][1]);
        });
        $(".modal-body").html(function(i, html) {
            return html.replace("Dominant_Warbands",  Object.entries(allobjects[0])[2][1]);
        });
        
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#sigmarhaven").click(function () {
        $("#titleofmodal").html("Sigmar Haven");
        $(".modal-body").html("");
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#brigandsburg").click(function () {
        $("#titleofmodal").html("Brigandsburg");
        $(".modal-body").html("");
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#blackpitsettlement").click(function () {
        $("#titleofmodal").html("Black Pit Settlement");
        $(".modal-body").html("");
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    $("#cutthroatsden").click(function () {
        $("#titleofmodal").html("Cutthroat's Den");
        $(".modal-body").html("");
        $("#myModal").show();
        $(".modal").click(function () {
            $('#myModal').hide();
        });
    });
    }));
});



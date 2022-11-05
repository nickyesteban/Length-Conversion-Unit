function lengthConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputCm = document.getElementById("inputCm");
    var inputInches = document.getElementById("inputInches");
    var inputFeet = document.getElementById("inputFeet");
    var inputMeters = document.getElementById("inputMeters");
    var inputKilometers = document.getElementById("inputKilometers");
    var inputMiles = document.getElementById("inputMiles");
    var inputYards = document.getElementById("inputYards");



    if (source == "inputCm") {
        inputInches.value = (valNum * 0.39370).toFixed(3);
        inputFeet.value = (valNum * 0.32808).toFixed(3);
        inputMeters.value = (valNum / 100).toFixed(3);
        inputKilometers.value = (valNum / 100000).toFixed(6);
        inputMiles.value = (valNum * 0.0000062137).toFixed(6);
        inputYards.value = (valNum * 0.010936).toFixed(3);
        inputNauticalmiles.value = (valNum * 0.0000053996);

    }


    if (source == "inputInches") {
        inputCm.value = (valNum / 0.39370).toFixed(2);
        inputFeet.value = (valNum * 0.083333).toFixed(3);
        inputMeters.value = (valNum / 39.370).toFixed(3);
        inputKilometers.value = (valNum / 39370).toFixed(6);
        inputMiles.value = (valNum * 0.000015783).toFixed(6);
        inputYards.value = (valNum * 0.027778).toFixed(3);
        inputNauticalmiles.value = (valNum * 0.0000137149);

    }

    if (source == "inputFeet") {
        inputMeters.value = (valNum / 3.2808).toFixed(2);
        inputInches.value = (valNum * 12).toFixed(2);
        inputCm.value = (valNum / 0.032808).toFixed(2);
        inputYards.value = (valNum * 0.33333).toFixed(2);
        inputKilometers.value = (valNum / 3280.8).toFixed(6);
        inputMiles.value = (valNum * 0.00018939).toFixed(6);
        inputNauticalmiles.value = (valNum * 0.0001645788);


    }

    if (source == "inputMeters") {
        inputFeet.value = (valNum * 3.2808).toFixed(2);
        inputInches.value = (valNum * 39.370).toFixed(2);
        inputCm.value = (valNum / 0.01).toFixed(2);
        inputYards.value = (valNum * 1.0936).toFixed(2);
        inputKilometers.value = (valNum / 1000).toFixed(6);
        inputMiles.value = (valNum * 0.00062137).toFixed(6);
        inputNauticalmiles.value = (valNum * 0.0005399568);

    }

    if (source == "inputKilometers") {
        inputFeet.value = (valNum * 3.2808).toFixed(2);
        inputMeters.value = (valNum * 1000).toFixed(2);
        inputInches.value = (valNum * 39370).toFixed(2);
        inputCm.value = (valNum * 100000).toFixed(2);
        inputYards.value = (valNum * 1093.6).toFixed(2);
        inputMiles.value = (valNum * 0.62137).toFixed(2);
        inputNauticalmiles.value = (valNum * 0.5399);


    }

    if (source == "inputMiles") {
        inputFeet.value = (valNum * 5280).toFixed(2);
        inputMeters.value = (valNum / 0.00062137).toFixed(2);
        inputInches.value = (valNum * 63360).toFixed(2);
        inputCm.value = (valNum / 0.0000062137).toFixed(2);
        inputYards.value = (valNum * 1760).toFixed(2);
        inputKilometers.value = (valNum / 0.62137).toFixed(2);
        inputNauticalmiles.value = (valNum * 0.868976);

    }

    if (source == "inputYards") {
        inputFeet.value = (valNum * 3).toFixed(2);
        inputMeters.value = (valNum / 1.0936).toFixed(2);
        inputInches.value = (valNum * 36).toFixed(2);
        inputCm.value = (valNum / 0.010936).toFixed(2);
        inputKilometers.value = (valNum / 1093.6).toFixed(2);
        inputMiles.value = (valNum * 0.00056818).toFixed(6);
        inputNauticalmiles.value = (valNum * 0.0004937365);

    }

    if (source == "inputNauticalmiles") {
        inputFeet.value = (valNum * 6076.1154).toFixed(2);
        inputMeters.value = (valNum * 1852).toFixed(2);
        inputInches.value = (valNum * 72913.3858).toFixed(2);
        inputCm.value = (valNum * 185200).toFixed(2);
        inputKilometers.value = (valNum * 1.852).toFixed(2);
        inputMiles.value = (valNum * 1.150779).toFixed(6);
        inputYards.value = (valNum * 2025.3718).toFixed(2);

    }
}
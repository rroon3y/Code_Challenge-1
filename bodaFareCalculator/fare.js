function calculateBodaFare() {

    const baseFare = 50; 
    const chargePerKm = 15; 
    
    
    let distanceInKm = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
    distanceInKm = Number(distanceInKm);
    
    
    let totalFare = baseFare + (distanceInKm * chargePerKm);
    
    
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");
}

calculateBodaFare();
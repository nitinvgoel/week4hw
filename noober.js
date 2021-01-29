async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()
  // writes the returned JSON to the console
  console.dir(json)
  // 🔥 start here: write code to loop through the rides
//   console.log(json[1][1].passengerDetails)
// console.log(json[1][1].passengerDetails)
  for (let i = 0; i < json.length; i++) {
      if (json[i].length > 1) {
        let outputElement = document.querySelector('.rides')
              outputElement.insertAdjacentHTML('beforeend', `
                <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  <i class="fas fa-car-side"></i>
                  <span>Noober Pool</span>
                  </h1>`)
      } else if (json[i][0].purpleRequested == true) {
        let outputElement = document.querySelector('.rides')
              outputElement.insertAdjacentHTML('beforeend', `
                <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  <i class="fas fa-car-side"></i>
                  <span>Noober Purple</span>
                  </h1>`)
      } else if (json[i][0].numberOfPassengers > 3)  {
        let outputElement = document.querySelector('.rides')
              outputElement.insertAdjacentHTML('beforeend', `
                <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  <i class="fas fa-car-side"></i>
                  <span>Noober XL</span>
                  </h1>`)
      } else {
        let outputElement = document.querySelector('.rides')
              outputElement.insertAdjacentHTML('beforeend', `
                <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                <i class="fas fa-car-side"></i>
                <span>Noober X</span>
                </h1>`)
      }
        for (leg=0; leg<json[i].length; leg++){
          if (json[i][0].purpleRequested == true) {
            let outputElement = document.querySelector('.rides')
            outputElement.insertAdjacentHTML('beforeend', `
              <div class="border-4 border-purple-500 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                  <h2 class="text-2xl py-1">${json[i][leg].passengerDetails.first} ${json[i][leg].passengerDetails.last}</h2>
                  <p class="font-bold text-gray-600">${json[i][leg].passengerDetails.phoneNumber}</p>
                  </div>
                  <div class="w-1/2 text-right">
                    <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${json[i][leg].numberOfPassengers}
                    </span>
                  </div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>${json[i][leg].pickupLocation.address}</p>
                            <p>${json[i][leg].pickupLocation.city}, ${json[i][leg].pickupLocation.state} ${json[i][leg].pickupLocation.zip}</p>
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>${json[i][leg].dropoffLocation.address}</p>
                            <p>${json[i][leg].dropoffLocation.city}, ${json[i][leg].dropoffLocation.state} ${json[i][leg].dropoffLocation.zip}</p>
                  </div>
                </div>
              </div>
            `)
          }
       else {
        let outputElement = document.querySelector('.rides')
            outputElement.insertAdjacentHTML('beforeend', `
              <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                  <h2 class="text-2xl py-1">${json[i][leg].passengerDetails.first} ${json[i][leg].passengerDetails.last}</h2>
                  <p class="font-bold text-gray-600">${json[i][leg].passengerDetails.phoneNumber}</p>
                  </div>
                  <div class="w-1/2 text-right">
                    <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${json[i][leg].numberOfPassengers}
                    </span>
                  </div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>${json[i][leg].pickupLocation.address}</p>
                            <p>${json[i][leg].pickupLocation.city}, ${json[i][leg].pickupLocation.state} ${json[i][leg].pickupLocation.zip}</p>
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>${json[i][leg].dropoffLocation.address}</p>
                            <p>${json[i][leg].dropoffLocation.city}, ${json[i][leg].dropoffLocation.state} ${json[i][leg].dropoffLocation.zip}</p>
                  </div>
                </div>
              </div>
            `)
      }
  }}
}
window.addEventListener('DOMContentLoaded', pageLoaded)
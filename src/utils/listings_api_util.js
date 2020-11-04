import $ from 'jquery';


export const getAllListings = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.simplyrets.com/properties',
        headers: {
            "Authorization": "Basic " + btoa("simplyrets:simplyrets")
        },
        error: (err) => console.log(err)
    })
);
      

export const getListing = (mlsId) => (
    $.ajax({
        method: 'GET',
        url: `https://api.simplyrets.com/properties/${mlsId}`,
        headers: {
            "Authorization": "Basic " + btoa("simplyrets:simplyrets")
        },
        error: (err) => console.log(err)
    })
);
      
function publicMemberDetailsResource(data) {
    return {
        "id":data.id,
        "fname":data?.fname,
        "lname":data?.lname,
        "state":data?.state,
        "city":data?.city,
        "dob":data?.dob,
        "is_profile_verified":data?.is_profile_verified,
        "country_code":data?.country_code,
        "image_name":data?.image_name,
        "createdAt":data?.createdAt,
        "updatedAt":data?.updatedAt,
        "cover_image_name":data?.cover_image_name,
        "country_name":data?.country_name
    }
}

function memberDetailsResource(data) {
    return {
        "id":data.id,
        "fname":data?.fname,
        "lname":data?.lname,
        "mobile_number":data?.mobile_number,
        "email":data?.email,
        "state":data?.state,
        "city":data?.city,
        "dob":data?.dob,
        "is_profile_verified":data?.is_profile_verified,
        "country_code":data?.country_code,
        "image_name":data?.image_name,
        "createdAt":data?.createdAt,
        "updatedAt":data?.updatedAt,
        "cover_image_name":data?.cover_image_name,
        "country_name":data?.country_name,
        "post":90,
        "viewership":20,
        "usefuls":10,
        "followers":476,
        "following":709
    }
}

module.exports = { publicMemberDetailsResource,memberDetailsResource};
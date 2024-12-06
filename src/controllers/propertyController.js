const Property = require("../models/property");

export async function property(req, res) {
    const{ title, description, location, price, propertyType, amenities, photos, videos} = req.body;

    try{
        const newProperty = new property({
            landlord: req.user.id,
            title,
            description,
            location,
            price,
            propertyType,
            amenities,
            photos,
            videos,
        });

        await property.save();
        res.status(201).json({message: 'Property listed successfully', property });
        
    }catch(error){
        res.status(401).json({ message: 'Error creating property listing', error});
    
    }
}
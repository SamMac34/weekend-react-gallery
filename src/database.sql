
    { id: 1, path: 'images/minnehaha_falls.jpg', description: 'Minnehaha Falls - Minneapolis, MN.', likes: 0 },
    { id: 2, path: 'images/northern-lights2.jpg', description: 'Photo of northern lights.', likes: 0 },
    { id: 3, path: 'images/disc_golf_sunset2.jpg', description: 'Disc golfing at Bryant Lake.', likes: 0 },
    { id: 4, path: 'images/goat_small.jpg', description: 'Image 4.', likes: 0 }

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    path VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    likes INTEGER DEFAULT 0
);

INSERT INTO images (path, description, likes)
VALUES  ('images/minnehaha_falls.jpg', 'Minnehaha Falls - Minneapolis, MN.', 0 ),
        ('images/northern-lights2.jpg', 'Photo of northern lights.', 0 ),
        

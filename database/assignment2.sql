--- Query 1: Insert a new account for Tony Stark
INSERT INTO public.account (
    account_firstname,
    account_lastname,
    account_email,
    account_password
)
VALUES (
    'Tony',
    'Stark',
    'tony@starkent.com',
    'Iam1ronM@n'
);

--- Query 2: Update Tony Stark's account type to 'Admin'
UPDATE public.account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkent.com';

--- Query 3: Delete Tony Stark's account
DELETE FROM public.account
WHERE account_email = 'tony@starkent.com';

--- Query 4: Modify the description of the 'GM Hummer' vehicle
UPDATE public.inventory
SET inv_description = REPLACE(
    inv_description,
    'small interiors',
    'a huge interior'
)
WHERE inv_make = 'GM'
  AND inv_model = 'Hummer';

--- Query 5: Retrieve all vehicles classified as 'Sport'
SELECT 
    i.inv_make,
    i.inv_model,
    c.classification_name
FROM public.inventory i
INNER JOIN public.classification c
    ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';

--- Query 6: Update image paths for all vehicles in the inventory
UPDATE public.inventory
SET
    inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');


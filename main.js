var img  = ["family.jpg", "grandpa.jpg", "grandma.jpg", "father.png", "mother.jpg", "brother.jpg", "sister.jpg", "puppy.jpg" ];

var names = ["Family Book", "William Jones", "Emma Jones", "Landon Jones", "Olivia Jones", "Lucas Jones", "Charlotte Jones", "Max Jones" ];

var i = 0;

function update()
{
    i++;
    
    var number_of_members_in_my_family = 5;
    if(i < number_of_members_in_my_family )
        {
            i = 0;
            
        }
    
    var updatedImage = img[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;      
}




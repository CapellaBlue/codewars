// Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle
//
// So
//
// find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// findNeedle(new Object[] {"hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"})
// find_needle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// should return
//
// 'found the needle at position 5'
// 'found the needle at position 5'
// 'found the needle at position 5'
// "found the needle at position 5"
// "found the needle at position 5"

var find_needle = function(a){
   for (var i = 0; i < a.length; i++) {
      if( a[i] == 'needle'){
         return "found the needle at position " + i;
      } else if (i == a.length - 1 && a[i] != 'needle') {
         "no needle found";
      };
   };
};

console.log(find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
// find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// findNeedle(new Object[] {"hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"})
// find_needle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])

const lesFormes = [
    { default:
        [[0,1],
         [0,1],
         [1,1]],
      left:
        [[1,1,1],
         [0,0,1]],
      right:
        [[1,0,0],
         [1,1,1]],
      upside:
        [[1,1],
         [1,0],
         [1,0]]
    },

    { default:
        [[3,0],
         [3,0],
         [3,3]],
      left:
        [[0,0,3],
         [3,3,3]],
      right:
        [[3,3,3],
         [3,0,0]],
      upside:
        [[3,3],
         [0,3],
         [0,3]]
    },

    { default: 
        [[0,2,0],
         [2,2,2]],
      left: 
            [[0,2],
             [2,2],
             [0,2]],
      right: 
            [[2,0],
             [2,2],
             [2,0]],
      upside:
            [[2,2,2],
             [0,2,0]]
    },

    { default: 
        [[5,5,0],
         [0,5,5]],
      left: 
           [[0,5],
            [5,5],
            [5,0]],
      right: 
           [[0,5],
            [5,5],
            [5,0]],
      upside:
             [[5,5,0],
              [0,5,5]],
    },

    { default: 
        [[0,6,6],
         [6,6,0]],
      left: 
           [[6,0],
            [6,6],
            [0,6]],
      right: 
           [[6,0],
            [6,6],
            [0,6]],
      upside:
             [[0,6,6],
              [6,6,0]],
    },

    { default: 
        [[7,7],
         [7,7]],
      left: 
           [[7,7],
            [7,7]],
      right: 
           [[7,7],
            [7,7]],
      upside:
          [[7,7],
           [7,7]],
    },

    { default: 
        [[4],
         [4],
         [4],
         [4]],
      left: 
           [[4,4,4,4]],
      right: 
           [[4,4,4,4]],
      upside:
            [[4],
             [4],
             [4],
             [4]]
    }

    /*{
        default:
           [[5,5,5,0,5,0,0,5,0,0,0,5,5,0,5,0,0,5],
            [5,0,0,0,5,0,0,5,0,0,5,0,0,0,5,0,5,0],
            [5,5,0,0,5,0,0,5,0,5,0,0,0,0,5,5,0,0],
            [5,0,0,0,5,0,0,5,0,0,5,0,0,0,5,0,5,0],
            [5,0,0,0,5,5,5,5,0,0,0,5,5,0,5,0,0,5]],
        left:
            [[5,5,5,0,5,0,0,5,0,0,0,5,5,0,5,0,0,5],
             [5,0,0,0,5,0,0,5,0,0,5,0,0,0,5,0,5,0],
             [5,5,0,0,5,0,0,5,0,5,0,0,0,0,5,5,0,0],
             [5,0,0,0,5,0,0,5,0,0,5,0,0,0,5,0,5,0],
             [5,0,0,0,5,5,5,5,0,0,0,5,5,0,5,0,0,5]],
        right:
            [[5,5,5,0,5,0,0,5,0,0,0,5,5,0,5,0,0,5],
             [5,0,0,0,5,0,0,5,0,0,5,0,0,0,5,0,5,0],
             [5,5,0,0,5,0,0,5,0,5,0,0,0,0,5,5,0,0],
             [5,0,0,0,5,0,0,5,0,0,5,0,0,0,5,0,5,0],
             [5,0,0,0,5,5,5,5,0,0,0,5,5,0,5,0,0,5]],
        upside: 
            [[5,5,5,0,5,0,0,5,0,0,0,5,5,0,5,0,0,5],
             [5,0,0,0,5,0,0,5,0,0,5,0,0,0,5,0,5,0],
             [5,5,0,0,5,0,0,5,0,5,0,0,0,0,5,5,0,0],
             [5,0,0,0,5,0,0,5,0,0,5,0,0,0,5,0,5,0],
             [5,0,0,0,5,5,5,5,0,0,0,5,5,0,5,0,0,5]]
    }*/

    /*{
        default: 
            [[6,6,6],
             [0,6,0],
             [0,6,0]],
        left:
            [[6,0,0],
             [6,6,6],
             [6,0,0]],
        right:
            [[0,0,6],
             [6,6,6],
             [0,0,6]],
        upside:
            [[0,6,0],
             [0,6,0],
             [6,6,6]]
    }*/

    /*{ default: 
        [[5,5,5,5,5],
         [5,0,0,0,5],
         [5,0,0,0,5],
         [5,5,5,5,5]],
      left: 
            [[5,5,5],
             [5,0,5],
             [5,0,5],
             [5,5,5]],
      right: 
            [[5,5,5],
             [5,0,5],
             [5,0,5],
             [5,5,5]],
      upside:
              [[5,5,5,5,5],
               [5,0,0,0,5],
               [5,0,0,0,5],
               [5,5,5,5,5]],
    }*/
];
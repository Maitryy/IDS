//SPDX-License-Identifier: UNLICENSED
//transaction history
//sellable columns
//Owner Files
pragma solidity >=0.7.0 <0.9.0;

contract DataShare {
    struct File {
        uint256 n;
        uint256 m;
        string[] data;
    }
    // For finding post owner, postid=>owner
    mapping(uint256 => address payable) PostOwner;
    //For finding posts owned by a person, person=>postid
    // mapping(address   => File[]) FilesOwned;
    // For finding files owned after buying, buyer=> file
    // mapping( address => File ) FilesOwned;
    mapping(address => mapping(uint256 => bool)) FilesOwned;

    // For finding files in a post, postid=> file
    mapping(uint256 => File) public file;
    //For finding cost per row block
    mapping(uint256 => uint256) FileCostPerRow;
    //For finding cost per column block
    mapping(uint256 => uint256) FileCostPerColumn;

    //function to add a post with post id, data and cost
    function addFile(
        uint256 _Pid,
        string[] memory data,
        uint256 nrows,
        uint256 ncolumns,
        uint256 rowcost,
        uint256 columncost
    ) public {
        file[_Pid] = File({n: nrows, m: ncolumns, data: data});
        //add cost
        FileCostPerColumn[_Pid] = columncost;
        FileCostPerRow[_Pid] = rowcost;
        //add owner of post
        PostOwner[_Pid] = payable(msg.sender);
        //add to list of posts owned by seller
        // PostsOwned[msg.sender].push(_Pid);

        // FilesOwned[msg.sender][_Pid]=true;
    }

    //function to buy a file
    function buyFile(
        uint256 _Pid,
        uint256 fromRow,
        uint256 toRow,
        uint256[] memory columnNo
    ) public payable returns (string[] memory) {
        require(msg.sender != PostOwner[_Pid], "Owner cannot buy data");

        uint256 rows = toRow - fromRow;
        // uint columns=columnNo.length;
        uint256 TotalCost = rows *
            FileCostPerRow[_Pid] +
            columnNo.length *
            FileCostPerColumn[_Pid];
        // require(
        //     msg.value>=TotalCost,
        //     "Insufficient Funds"
        // );
        PostOwner[_Pid].transfer(TotalCost);
        FilesOwned[msg.sender][_Pid] = true;

        // string[] memory data = new string[](rows*columns);

        uint256 totalLength = rows * columnNo.length;
        string[] memory data = new string[](totalLength);

        for (uint256 i = 0; i < rows; i++) {
            for (uint256 j = 0; j < columnNo.length; j++) {
                string storage temp = file[_Pid].data[
                    (fromRow + i) * file[_Pid].m + columnNo[j]
                ];
                data[i * columnNo.length + j] = temp;
            }
        }

        return (data);
    }
}
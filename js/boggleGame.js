const dx = [- 1, -1, -1, 1, 1, 1, 0, 0];
const dy = [- 1, 0, 1, -1, 0, 1, -1, 1];
// 5x5 보글 게임 판의 해당 위치에서 주어진  단어가 시작하는지를 반환

function hasWord(y, x, word) {
    if(!inRange(y, x)) return false;
    if(board[y][x] != word[0]) return false;
    if(word.size() == 1)return true;

    for(let direction = 0; direction < 8; ++direction)
    {
        let nextX = dx[direction];
        let nextY = dy[direction];

        if(hasWord(nextY, nextX, word.substring(1)));
        return true;
    }
}
# ĐÁN ÁN CHÍNH THỨC CONTEST ĐẦU NHIỆM KÌ 2022 CODER QO

#### Câu 1: Dãy ký tự (TT)

* Code python
```python
import sys
import math

sys.stdin  = open("DKT.INP", "r")
sys.stdout = open("DKT.OUT", "w")
n = int(input())
ans = int(((n - 1) * n)/2 + 1) + n

res = ans % 26

a = ord("A")

print(chr(a + res - 1))

```
* Toán: 
E

#### Câu 2: Cờ caro (TO)

X chắc chắn sẽ thắng nêu đi theo lần lượt các bước sau:
***5M. 8M. 7L. 10i. 12i.***

#### Câu 3: Bất đẳng thức (TO)
Giải: sử dụng BĐT AM - GM và Cauchy - Schwarz.
![](https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/303950188_1253997475375887_4115666300314930737_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=eW8_DOKeLP0AX9VPVar&_nc_ht=scontent.fhan15-2.fna&oh=03_AVIkvv2pJAXjc8jXSJaQWOFe-4UBHoYttFKaGmBLlT21wQ&oe=633959EE)
#### Câu 4: Trộn màu
c++
```cpp
#include<bits/stdc++.h>
using namespace std;
int t[999999];
main()
{
    int k;
    cin >> k;
    while(k--)
    {
        int n; cin >> n;
        for(int i = 1; i <= n; i++)
            cin >> t[i];
        sort(t + 1, t + 1 + n);
        int ans = 0;
        for(int i=1; i <= n; i++)
            if(t[i] == t[i+1]) ans++;
        cout << ans << endl;
        ans = 0;
    }
}
```
#### Câu 5: Nối điểm
c++
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define float double
const int ll = 999999;
int n, t[ll], dp[ll], dd[ll];
void enter()
{
    cin >> n;
    for(int i = 1; i <= n; i++) cin >> t[i];
}
void build()
{
    dp[1] = 1;
    dd[1] = t[1];
    for(int i = 2; i <= n; i++)
    {
        int ans = 0;
        for(int j = 1; j <= i - 1; j++)
        {
            if(t[j] < t[i] && dp[j] > dp[ans]) ans = j;
        }
        dp[i] = dp[ans] + 1;
    }
    sort(dp + 1, dp + 1 + n, greater<int>());
    cout << dp[1];
}
main()
{
    enter();
    build();
}
```

#### Câu 6: Con đường đến nhà hàng

c++
```cpp
#include<bits/stdc++.h>
#define endl "\n"
#define s second
#define f first
#define int long long
#define float double
using namespace std;
const int ll = 1e5 + 10, oo = 1e7 + 10;
int n, a[ll],  m, res = 0;
bool visited[ll];
vector<int> adj[ll];
void dfs(int u, int so_con_meo){
    visited[u] = true;
    if(so_con_meo > m){
        return;
    }
    int check_la = 1;
    for(auto e: adj[u]){
        if(!visited[e]){
            visited[e] = true;
            check_la = 0;
            if(a[e] == 1){
                dfs(e, so_con_meo + 1);
            }
            else{
                dfs(e, 0);
            }
        }
    }
    
    res += (check_la == 1);
    
   // cout << res << " " << so_con_meo <<" " <<check_la<<" " << u<< endl;
}
void enter(){
    cin >> n >> m;
    for(int i = 1; i <= n; i++){
        cin >> a[i];
    }
    for(int i = 1; i <= n - 1; i++){
        int u, v; cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
}
void build(){
    dfs(1, a[1]);
    cout << res;
}
signed main(){
   // freopen("a.inp", "r", stdin);
  //  freopen("a.out", "w", stdout);
    ios_base::sync_with_stdio(false);
    cin.tie(0); cout.tie(0);
    enter();
    build();
}
```

#### Câu 7: Hình học

Chứng minh quy nạp: Giả sử với $n$ điểm thì tồn tại ít nhất $(n - 4)$ tam giác tù.
$\to$ Cần chứng minh: Với $(n + 1)$ điểm thì tồn tại ít nhất $(n - 3)$ tam giác tù.
Xét $n$ điểm bất kì trong $(n + 1)$ điểm đó thì chỉ có $(n - 4)$ tam giác tù được tạo thành. Xét 1 điểm $A$ không thuộc $n$ điểm đó. Xét tập hợp các tam giác được tạo thành từ điểm $A$ với 2 trong số $n$ điểm đã cho gọi là $(H)$.
+ Nếu $(H)$ chứa 1 tam giác tù thì kết hợp với $(n - 4)$ tam giác tù được tạo thành từ $n$ điểm cho trước $\to$ $dpcm$.
+ Nếu $(H)$ không chứa tam giác tù nào $\to CMTT \to n$ điểm bất kì khác.
$\to$ với mọi tam giác được tạo thành từ các điểm trong 2022 điểm này đều là tam giác nhọn $\to$ vô lý.
Vậy: dpcm.


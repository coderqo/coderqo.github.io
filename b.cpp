#include <bits/stdc++.h>
using namespace std;
const int mod = 1e9 + 7;
const int maxn = 1e5 + 5;

signed main() {
    int n, k, m; 
    cin >> n >> k >> m;
    vector<int> a (maxn, 0), ma(maxn, 0), su(maxn, 0);
    for(int i = 1; i <= m; ++i) {
        cin >> a[i];
        ma[a[i]] += 1;
    }
    for (int i = 1; i <= n; ++i){
        if(ma[i] == 1)
            su[i] = su[i - 1] + 1;
        else su[i] = su[i - 1];
    }
    int ans = maxn;
    for (int i = k; i <= n; ++i){
        ans = min(ans, su[i] - su[i - k]);
    }
    cout << ans;
}

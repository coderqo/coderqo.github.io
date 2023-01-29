# Solution nhóm 4

Các ký tự chuỗi được sắp xếp theo giá trị của một số nguyên được tính toán từ chuỗi. Nếu chuỗi bắt đầu với một số, giá trị số nguyên được tính bằng cách nhân mỗi chữ số với 10 và cộng với chữ số hiện tại. Nếu chuỗi không bắt đầu với một số, giá trị số nguyên được tính bằng giá trị ASCII của ký tự đầu tiên trong chuỗi.
Sau khi tính toán giá trị số nguyên cho từng chuỗi, chương trình sử dụng thuật toán Quick Sort để sắp xếp chuỗi theo giá trị số nguyên. 


Code mẫu

**Cpp**

```cpp
#include <bits/stdc++.h>
using namespace std;

#define int long long
const int ll = 1e6 + 5;
int a[ll], n;
string b[ll];

int partition(int a[], string b[], int l, int r) {
    int j = l;
    for (int i = l; i <= r - 1; i++) {
        if (a[i] < a[r]) {
            int t = a[i];
            a[i] = a[j];
            a[j] = t;
            
            string tmp = b[i];
            b[i] = b[j];
            b[j] = tmp;
            j++;
        }
        else if (a[i] == a[r] && isdigit(b[i][0])) {
            int t = a[i];
            a[i] = a[j];
            a[j] = t;
            
            string tmp = b[i];
            b[i] = b[j];
            b[j] = tmp;
            j++;
        }
    }
    
    int t = a[r];
    a[r] = a[j];
    a[j] = t;
    
    string tmp = b[r];
    b[r] = b[j];
    b[j] = tmp;
    return j;
}

void quicksort(int a[], string b[], int l, int r) {
    if (l < r) {
        int index = partition(a, b, l, r);
        quicksort(a, b, l, index - 1);
        quicksort(a, b, index + 1, r);
    }
}

signed main() {
    cin >> n;
    for (int i = 1; i <= n; i++) {
        cin >> b[i];
        if (!isdigit(b[i][0])) {
            a[i] = (int)b[i][0];
            continue;
        }
        for (int j = 0; j < (int)b[i].size(); j++) 
            if (isdigit(b[i][j]))
                a[i] = a[i] * 10 + b[i][j] - '0';
    }
    quicksort(a, b, 1, n);
    for (int i = 1; i <= n; i++) 
        cout << b[i] << " ";
    return 0;
}

```

#include<bits/stdc++.h>
using namespace std;
void callturn(int r, int c,int val)
{
	int arr[r+1][c+1];
	int i=0,j=0;
	int ri=ci=0;
	while(j!=c)
	{
	  arr[i][j++]=val++; 	
	}
	i++;
	j--;
	ri++;
	while(i!=r)
	{
		arr[i++][j]=val++;
	}
	j--;
	i--;
	c--;
	while(i!=ci)
	{
		arr[i--][]
	}
}
int main()
{
	int r=3;
	int c=3;
	callturn(r,c,1);
	return 0;
}

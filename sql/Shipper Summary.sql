SELECT 
    S.companyname AS CompanyName,
    SUM(O.freight) AS TotalFreight,
    SUM(OD.qty * OD.unitprice) AS TotalCostShipped,
    SUM(OD.qty) AS TotalItemsShipped
FROM
    Sales.Shippers S
INNER JOIN
    Sales.Orders O ON S.shipperid = O.shipperid
INNER JOIN
    Sales.OrderDetails OD ON O.orderid = OD.orderid
GROUP BY
    S.companyname